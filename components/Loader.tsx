import react from 'react'

const Loader = ({ classnames }: { classnames: string }) => {
  return <div className={`spinner ${classnames}`}></div>
}

export default Loader
