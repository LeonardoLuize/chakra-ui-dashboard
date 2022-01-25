import Icon from "@chakra-ui/icon";
import { Box, Stack, Text, Link } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps) {
    return (
        <Box>
            <Text fontWeigth="bold" color="gray.400" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch" >
                {children}
            </Stack>
        </Box>
    );
}