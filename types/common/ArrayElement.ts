type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export default ArrayElement
