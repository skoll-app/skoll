import types from "../store/sidebar/types"

export default function({ store }) {
  store.commit(`sidebar/${types.SWITCH_OPEN}`, false)
}
