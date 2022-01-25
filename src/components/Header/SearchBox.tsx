import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
    //const [search, setSearch] = useState('');

    const searchInputRef = useRef<HTMLInputElement>(null)

    //debounce

    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            bg="gray.800"
            borderRadius="full"
        >
            <Input
                color="gray.200"
                variant="unstyled"
                placeholder="Buscar na plataforma"
                _placeholder={{ color: "gray.400" }}
                px="4"
                mr="4"
                ref={searchInputRef}
            />

            <Icon alignSelf="center" fontSize="20" as={RiSearchLine} />
        </Flex>
    );
}