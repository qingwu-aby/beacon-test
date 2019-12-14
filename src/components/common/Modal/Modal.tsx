import React, { FC, useState, useEffect, useCallback, cloneElement } from 'react'
import cn from 'classnames'

const Modal: FC<{
  children: any
  enteringClass: string
  leavingClass: string
  unMount?: () => void
}> = ({ children, enteringClass, leavingClass, unMount }) => {
  const [modalClass, setModalClass] = useState('')

  const handleAnimationEnd = useCallback(() => {
    setModalClass('')
    if (modalClass === leavingClass) {
      unMount && unMount()
    }
  }, [modalClass, leavingClass, unMount])

  useEffect(() => {
    setModalClass(leavingClass)
  }, [leavingClass])

  children = React.Children.only(children) as any

  return ({
    ...children,
    props: {
      ...children.props,
      className: cn(children.props.className, modalClass),
      onAnimationEnd: handleAnimationEnd
    }
  })
}

export default Modal
