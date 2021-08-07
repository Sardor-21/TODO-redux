import React from 'react'
import ContainerWrapper from './ContainerWrapper'

const Container = (props) => {
    return (
        <ContainerWrapper>
            {props.children}
        </ContainerWrapper>
    )
}

export default Container
