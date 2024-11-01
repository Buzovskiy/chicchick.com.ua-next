const getStaff = async () => {
      return await fetch(`${process.env.NEXT_PUBLIC_API}/staff/`, {cache: 'no-store'});
}

export {getStaff}