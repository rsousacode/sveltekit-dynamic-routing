/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return /^(?!\/api\/).*/.test(param);
}
