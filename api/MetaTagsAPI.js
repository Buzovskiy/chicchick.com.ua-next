const getMetaTagBySlug = async (slug) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API}/meta-tags/${slug}/`);
}

export {getMetaTagBySlug}
