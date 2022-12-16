import { useRouter } from 'next/router'
import CharacterPage from '../../components/CharacterPage'

export default function Character() {
  const router = useRouter()
  const characterId = router.query.characterId

  return (
    <CharacterPage
      characterId={characterId}
    />
  )
}
