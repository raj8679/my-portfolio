
// import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./styles/home.module.css"

const Home = ({data}) => {
  console.log(data)

  
  return (
    <div className={styles.Container}>
      <div>
      <div className={styles.pic}>
        
        
        {/* <Image src={data.avatar_url} width={200} height={200} alt="raj"/> */}
      </div>
      <div className={styles.about}>
       {/* {data.map((el)=>(
        console.log(el)
       ))} */}
      </div>
      </div>
      

    </div>
  )
}



export default Home


export async function getServerSideProps(context){
  let res= await fetch("https://api.github.com/users/raj8679");
  let details= await res.json();

  return{
    props:{
      data:details,
    }
  }
}