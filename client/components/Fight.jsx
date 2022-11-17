import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, InputBase } from '@mantine/core'

export default function Fight() {
  return (
    <div className="button-center">
      <Button variant="light" color="pink" radius="xl" size="xl">
        FIGHT
      </Button>
    </div>
  )
}
