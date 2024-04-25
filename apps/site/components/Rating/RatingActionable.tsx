import { Icon, Rating, RatingProps } from '@faststore/ui'
import { useState } from 'react'

export type RatingActionableProps = {
  value: RatingProps['value']
}

const RatingActionable = (props: RatingActionableProps) => {
  const [rating, setRating] = useState(props.value)

  return (<Rating value={rating} icon={<Icon name="fs-star" />} onChange={setRating} />);
}

export default RatingActionable
