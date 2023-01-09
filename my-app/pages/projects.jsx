import React from 'react'

const Projects = ({data}) => {
  console.log(data)
  return (
    <div>Projects</div>
  )
}

export default Projects


export async function getServerSideProps(context){
  let res= await fetch("https://api.github.com/search/repositories?q=user:raj8679+fork:true&sort=updated&per_page=10&type=Repositories")
  return{
    props:{
      data:res.json(),
    }
  }
}