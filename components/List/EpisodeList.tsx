'use client'
import React from 'react'
import Link from 'next/link';
import {  ListItemButton, ListItemText} from "@mui/material";
import { useState } from 'react';
import { Episode } from '@/app/api/utils/api';

const EpisodeList: React.FC<{ episode: Episode }> = ({ episode }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null)

  const handleEpisodeSelect = (episodeId: string) => {
    if (selectedEpisode === episodeId) {
      setSelectedEpisode(null)
      window.location.href = '/'
    } else {
      setSelectedEpisode(episodeId)
    }
  }
  return (<li>
        <Link
          href={`/episode/${episode.id}`}
        >
          <ListItemButton
            selected={selectedEpisode === episode.id}
            onClick={() => handleEpisodeSelect(episode.id)}
          >
            <ListItemText primary={episode.name} />
          </ListItemButton>
        </Link>
      </li>
   
  )
}

export default EpisodeList