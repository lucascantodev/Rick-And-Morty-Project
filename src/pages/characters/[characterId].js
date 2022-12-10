import { useRouter } from 'next/router'
// import PageComponent from '../components/PageComponent'

export default function Character() {
  const router = useRouter()
  const characterId = router.query.characterId

  return (
    <>
      
    </>
  )
}