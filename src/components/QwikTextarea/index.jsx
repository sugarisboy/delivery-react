import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: flex;
    position: relative;
    margin: 15px 0;
    width: 100%;
`

const Title = styled.span`
    position: absolute;
    left: 15px;
    top: -5px;

    color: #7f7f7f;
    font-size: 13px;
    background: #fff;
`

const Textarea = styled.textarea`
    width: 100%;

    border: 1px solid #7f7f7f;
    border-radius: 30px;

    padding: 15px 20px;

    color: #000;
    font-size: 15px;
    resize: none;
`

export default ({ title, type, name, value, onChange, cols, rows }) => {
    return (
        <Label>
            <Title>{title}</Title>
            <Textarea name={name}
                      placeholder={title}
                      value={value}
                      onChange={onChange}
                      cols={cols}
                      rows={rows}
            />
        </Label>
    )
}