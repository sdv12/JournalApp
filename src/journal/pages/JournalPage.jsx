

import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
    
    {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor saepe temporibus sed pariatur quas laboriosam vitae unde recusandae sequi assumenda tenetur, nam rerum nemo, veritatis aspernatur est blanditiis sit officia.</Typography>*/}

    <NothingSelectedView />
    {/*NoteView*/}

    <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
    
  )
}

