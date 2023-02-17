import {error} from "@sveltejs/kit";


/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
  // Check if slug params exist
  return await fetch("/api/hello")
    .then(data => data.json())
    .then(data => {
      return {
        data: data
      };
    }).catch((e) => {
        return {e: e}
    })
}
