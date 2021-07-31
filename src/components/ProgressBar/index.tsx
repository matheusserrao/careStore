import styled from 'styled-components'

interface ProgessBarProps {
  bgcolor: string
  completed: number
}

const ProgressBar = (props: ProgessBarProps) => {
  const { bgcolor, completed } = props

  return (
    <ProgressBarContainer>
      <Filler completed={completed} bgcolor={bgcolor}>
        <Label>{`${completed}%`}</Label>
      </Filler>
    </ProgressBarContainer>
  )
}

export default ProgressBar

const Label = styled.span`
  font-size: 12px;
  margin-left: 1px;
  padding: 4px;
  font-weight: bold;
  color: white;
  color: 'white';
`

const ProgressBarContainer = styled.div`
  width: 90%;
  background-color: #e0e0de;
  border-radius: 8px;
  margin: 50;
`
const Filler = styled.div`
  height: 100%;
  width: ${(props: ProgessBarProps) => props.completed}%;
  background-color: ${(props: ProgessBarProps) => props.bgcolor};
  border-radius: 8px;
  justify-content: center;
  text-align: right;
`
