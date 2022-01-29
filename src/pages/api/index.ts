// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { BeerOMeter } from '@/utils/beers.util'


type Data = {
  beers?: number
  error?: string
}

const missingParams = 'Missing temperature or humans parameters, for example: http://localhost:3000/api?temperature=30&humans=2' 

export default function handler(
  { query: { temperature, humans } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!temperature || !humans) {
    res.status(401).json({ error: missingParams})
  }
  else {
    
    const beers = BeerOMeter(Number(temperature), Number(humans))
    res.status(200).json({ beers: beers })
  }
}
