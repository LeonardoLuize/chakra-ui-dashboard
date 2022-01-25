import { Button } from "@chakra-ui/button";

interface PaginationItemProps {
    isCurrent?: boolean;
    page: number;
}

export default function PaginationItem({ isCurrent = false, page }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {page}
            </Button>
        );
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {page}
        </Button>
    );
}