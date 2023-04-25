import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import type { InputProps } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import { CopyIcon } from '@chakra-ui/icons';

type FixedLengthArray<T, N extends number, A extends any[] = []> = A extends {
  length: N;
}
  ? A
  : FixedLengthArray<T, N, [...A, T]>;

type ClassSchedule = FixedLengthArray<string, 5>;

type FormStrs = FixedLengthArray<ClassSchedule, 5>;

function App() {
  const [formStrs, setFormStrs] = useState<FormStrs>([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);

  return (
    <Box p={['0 2vw', '0 10vw']}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>授業コードを入力してください</TableCaption>
          <Thead>
            <Tr>
              <Th>月曜</Th>
              <Th>火曜</Th>
              <Th>水曜</Th>
              <Th>木曜</Th>
              <Th>金曜</Th>
            </Tr>
          </Thead>
          <Tbody>
            {formStrs.map((row, i) => (
              <Tr key={i}>
                {row.map((str, j) => (
                  <Td key={j}>
                    <CodeInput
                      value={str}
                      onChange={(event) =>
                        setFormStrs(
                          (prev) =>
                            prev.map((r, k) =>
                              i === k
                                ? [
                                    ...r.slice(0, j),
                                    event.target.value,
                                    ...r.slice(j + 1),
                                  ]
                                : r
                            ) as FormStrs
                        )
                      }
                    />
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <ResultOutput />
    </Box>
  );
}

function CodeInput({ ...props }: InputProps) {
  return <Input variant="flushed" {...props} />;
}

function ResultOutput() {
  return (
    <InputGroup p={['2vw', '10vw']} size="lg">
      <Input disabled value={'https://example.com'} />
      <InputRightAddon>
        <Button
          aria-label="copy result url"
          colorScheme="teal"
          leftIcon={<CopyIcon>Copy</CopyIcon>}
        >
          Copy
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
}

export default App;
