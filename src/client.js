import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "68vabt1w",
    dataset: "production",
    useCdn: true
});