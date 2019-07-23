const ObjectMap = (obj, f) => (
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, f(v, k)]))
)

const ObjectForEach = (obj, f) => {
  Object.entries(obj).forEach(([k, v]) => { f(v, k) })
}

const ObjectFill = (obj, filling) => (
  ObjectMap(obj, (v, k) => filling[k] !== undefined ? filling[k] : v)
)

export { ObjectMap, ObjectForEach, ObjectFill }