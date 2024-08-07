const getStaff = async () => {
      return await fetch(`${process.env.NEXT_PUBLIC_API}/staff/`);
}

export {getStaff}