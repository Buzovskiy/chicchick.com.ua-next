const getServicesBySlug = async (slug) => {
      return await fetch(`${process.env.NEXT_PUBLIC_API}/services/${slug}/`, {cache: 'no-store'});
}

export {getServicesBySlug}
