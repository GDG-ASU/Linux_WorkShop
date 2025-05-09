import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

export default function OutlinedTimeline() {
  return (
    <div style={{ textAlign: 'left', marginLeft: '20px' }}>
      <h1 className='text-xl font-bold mt-8 mb-4 text-center'>Our Beloved Linux Workshop Students</h1>
      <Timeline position="alternate" sx={{ px: 4, textAlign: 'left' }}>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#4285F4' }} // Blue (Google)
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Ameen Abushanab</Typography>
            <Typography>"The Linux workshop was very hands-on. I feel confident using the terminal now!"</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#34A853' }} // Green (Google)
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Mikal Abu Baker</Typography>
            <Typography>"This workshop helped me understand Linux in-depth, especially the command line tools."</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#FBBC05' }} // Yellow (Google)
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Ahmad Mahmoud</Typography>
            <Typography>"Great workshop! Learned how to set up servers and manage services on Linux."</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#EA4335' }} // Red (Google)
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Omar Qwasmi</Typography>
            <Typography>"The Linux workshop really opened my eyes to the power of open-source tools."</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#4285F4' }} // Blue (Google)
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">SpiderMan</Typography>
            <Typography>"The practical exercises were the best! It helped me set up my own Linux machine."</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#34A853' }} // Green (Google)
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Yaman Alrifai</Typography>
            <Typography>"I now understand how to navigate Linux filesystems and work with packages like a pro."</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ minHeight: 120 }}>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ width: 24, height: 24, borderColor: '#FBBC05' }} // Yellow (Google)
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Bashar Abu Asbeh</Typography>
            <Typography>"This Linux workshop was a game-changer for me. I’m now comfortable with scripting and automation."</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
