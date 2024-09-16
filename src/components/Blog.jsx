import { Box, Flex, Heading, Card, CardBody, SimpleGrid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import dataSet from "./BlogData";

function Blog() {
  return (
    <Box px={{ base: 4, md: 10, lg: 40 }} py={{ base: 10, md: 20 }}>
      <Box textAlign={'center'} lineHeight={'26px'}>
        <Heading pb={6} fontSize={{ base: '28px', md: '32px', lg: '37px' }} fontWeight={600}>
          Blog Our Latest News
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }} fontWeight={400}>
          Have you ever browsed food blogs like mine and wondered 
          <Text as="span" fontWeight={500}> how to start a food blog of your very own?</Text>
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} pt={10}>
        {dataSet.map((item) => (
          <Card key={item.id} w="100%">
            <CardBody cursor={'pointer'}>
              <Image
                src={item.img}
                alt={item.title}
                borderRadius="lg"
                w="100%"
                h="186px"
                objectFit="cover" // Ensure the image doesn't stretch
              />
              <Stack mt="6" spacing="3">
                <Flex fontSize="12px" fontWeight={400} color="#DA3743" gap={2}>
                  Design <Text color="black">{item.date}</Text>
                </Flex>

                <Heading size="md" fontSize={{ base: '14px', md: '16px' }} fontWeight={700}>
                  {item.title}
                </Heading>

                <Text fontSize={{ base: '12px', md: '14px' }} fontWeight={400}>
                  {item.Blog}
                </Text>

                <Text color="#DA3743" fontSize={{ base: '12px', md: '14px' }} fontWeight={700}>
                  READ MORE
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Blog;
