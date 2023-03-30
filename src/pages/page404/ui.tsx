import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {paths} from '../../processes/rootes/paths'

export const Page404 = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(paths.home)
  },[])

  return null
}
