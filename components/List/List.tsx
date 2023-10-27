'use client'
import React from 'react'
import Link from 'next/link';
import { Box, Typography } from "@mui/material";
import { useState } from 'react';

type Episode = {
  id: string,
  name: string,
  characters: string[]
}
const List: React.FC<{ episode: Episode }> = ({ episode }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null)

  const handleEpisodeSelect = (episodeId: string) => {
    if (selectedEpisode === episodeId) {
      setSelectedEpisode(null)
     window.location.href = '/'
    } else {
      setSelectedEpisode(episodeId)
    }
  }
  return (
    <div>
      <li key={episode.id}
      >
        <Link href={`/episode/${episode.id}`}
        >
          <Typography sx={{display:'flex',alignItems:'center',padding: '5px 10px',cursor:'pointer',
              '&:hover': {
                backgroundColor: selectedEpisode === episode.id ? 'lightgray' : 'darkgray',
              },
              backgroundColor: selectedEpisode === episode.id ? 'lightgray' : 'transparent',
            }}
            onClick={() => handleEpisodeSelect(episode.id)}>
            {episode.name}
          </Typography>
        </Link>
      </li>
    </div>
  )
}

export default List