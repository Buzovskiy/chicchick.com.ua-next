const getServicesBySlug = async (slug) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API}/services/${slug}/`);
}

export {getServicesBySlug}
