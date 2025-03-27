import SanityClientConstructor from "@sanity/client"

export const client = SanityClientConstructor({
    projectId: "xuu7r9ii",
    dataset: "production",
    apiVersion: "v2025-03-24",
    useCdn: false
})