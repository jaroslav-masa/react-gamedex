import { Avatar, Typography } from "@mui/material"
import { Stack } from "@mui/system"

const ProfileAvatar = () => {
  return (
    <Stack direction="row">
      <Typography variant="h6" sx={{ alignSelf: "center", paddingRight: 1}}>DXVIL デビル</Typography>
      <Avatar />
    </Stack>
  )
}

export default ProfileAvatar