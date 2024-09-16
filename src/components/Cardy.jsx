import React from "react";
import {
  Card,
  CardBody,
  Box,
  Stack,
  Heading,
  Button,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import data from "./Meal";

function Cardy() {
  return (
    <Box mt={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {data.map((item) => (
          <Card key={item.id} w={"100%"}>
            <CardBody cursor={'pointer'}>
              <Image
                src={item.img}
                alt={item.title}
                borderRadius="lg"
                w={"100%"}
                h={"186px"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" fontSize={"20px"} fontWeight={700}>
                  {item.title}
                </Heading>
                <Text fontSize={'14px'} fontWeight={400}>
                  {item.name}
                </Text>
                <Text color="Orange.600" fontSize="24px" fontWeight={500}>
                  {item.price}
                </Text>
              </Stack>
            </CardBody>

            
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Cardy;
