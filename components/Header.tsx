"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box pb="112px" as="section">
      <Box color="#F7FAFC" bg="#6B46C1" pt="90px" pb="198px" px="32px">
        <Heading fontWeight="800" fontSize="48px" className="response-heading">
          Simple Pricing For Your Business
        </Heading>
        <Text fontWeight="500" fontSize="24px" pt="16px" className="respo-text">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
