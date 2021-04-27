import React from 'react'

export async function getServerSideProps({ params }) {
  const props = await fetch('https://gist.githubusercontent.com/IgorMotorny/0d3924d690d0ed9414e0b046bc8c389e/raw/test.json')
    .then(r => r.json())
  console.log(props)
  return { props }
}

export default function Test({ data }) {
  return (
    <h1>{data}</h1>
  )
}
