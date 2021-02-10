import { Search } from '@styled-icons/bootstrap'

// UI
import { Container, Input, Button } from '../../UI'

export interface ComponentType {
  onKeyPress: (e: React.KeyboardEvent) => void;
  onChange: (e?: string) => void;
  value: string
}

const SearchInput: React.FC<ComponentType> = ({ onChange, value, onKeyPress }) => {
  return <Container>

    <Container index="1" margin="0 -24px 0 8px">
      <Search width="16px" />
    </Container>

    <Input
      onKeyPress={onKeyPress}
      padding="6px 38px 6px 30px"
      value={value}
      onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
      mobile="height: 34px;"
    />

    <Button
      onClick={() => onChange(undefined)}
      font="bold 10px/12px Nunito"
      width="22px" height="22px"
      radius="100%" bgColor="var(--gray)"
      margin="0 8px 0 -30px" padding="0"
      justify="center">
      X
    </Button>

  </Container>;
}

export default SearchInput;