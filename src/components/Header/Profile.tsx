import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Leonardo Luize</Text>
                    <Text color="gray.300" fontSize="small">
                        leonardo@luize.com.br
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Leonardo Luize" src="https://github.com/LeonardoLuize.png" />
        </Flex>
    );
}