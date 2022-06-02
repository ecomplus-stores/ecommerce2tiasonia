import {
    i19add,
    i19addDiscountCoupon,
    i19campaignAppliedMsg,
    i19code,
    i19couponAppliedMsg,
    i19discountCoupon,
    i19errorMsg,
    i19hasCouponOrVoucherQn,
    i19invalidCouponMsg
  } from '@ecomplus/i18n'
  
  import { i18n } from '@ecomplus/utils'
  import { store, modules } from '@ecomplus/client'
  import ecomCart from '@ecomplus/shopping-cart'
  import ecomPassport from '@ecomplus/passport-client'
  import AAlert from '@ecomplus/storefront-components/src/AAlert.vue'
  
  const addFreebieItems = (ecomCart, productIds) => {
    if (Array.isArray(productIds)) {
      productIds.forEach(productId => {
        if (!ecomCart.data.items.find(item => item.product_id === productId)) {
          store({ url: `/products/${productId}.json` })
            .then(({ data }) => {
              if (data.quantity > 0 && (!data.variations || !data.variations.length)) {
                ecomCart.addProduct(
                  {
                    ...data,
                    flags: ['freebie', '__tmp']
                  },
                  null,
                  productIds.reduce((qnt, _id) => {
                    return _id === productId ? qnt + 1 : qnt
                  }, 0)
                )
              }
            })
            .catch(console.error)
        }
      })
    }
  }
  
  export default {
    name: 'DiscountApplier',
  
    components: {
      AAlert
    },
  
    props: {
      amount: Object,
      couponCode: String,
      hasCouponInput: {
        type: Boolean,
        default: true
      },
      isFormAlwaysVisible: Boolean,
      isCouponApplied: Boolean,
      isAttentionWanted: Boolean,
      canAddFreebieItems: {
        type: Boolean,
        default: true
      },
      modulesPayload: Object,
      ecomCart: {
        type: Object,
        default () {
          return ecomCart
        }
      },
      ecomPassport: {
        type: Object,
        default () {
          return ecomPassport
        }
      }
    }
  }