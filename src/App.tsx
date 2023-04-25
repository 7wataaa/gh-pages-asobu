import {
  Box,
  Input,
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

function App() {
  return (
    <Box>
      <TableContainer p={['2vw', '10vw']}>
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
            <Tr>
              <Td>
                <CodeInput placeholder="ex) B0B002A0" autoFocus />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
            </Tr>

            <Tr>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
            </Tr>

            <Tr>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
            </Tr>

            <Tr>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
            </Tr>

            <Tr>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
              <Td>
                <CodeInput />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}

function CodeInput({ ...props }: InputProps) {
  return <Input variant="flushed" {...props} />;
}

export default App;
