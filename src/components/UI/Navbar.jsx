import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Image,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea
} from '@mantine/core';
import {MantineLogo} from '@mantine/ds';
import {useDisclosure} from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconDevices,
    IconGift,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown
} from '@tabler/icons';
import logo from '../../assets/logo_bookly_text.png';
import Search from "./Search.jsx";

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan(1080)]: { //old is 'sm' (768)
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan(1080)]: { //old is 'md' (992)
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan(1080)]: { //old is 'md'
            display: 'none',
        },
    },
}));

const mockdata = [
    {
        icon: IconBook,
        title: 'Books',
        description: 'Books that will be a big pleasure to read',
    },
    {
        icon: IconDevices,
        title: 'Digital Books',
        description: 'Digital - innovative, light, easy to read in any situation whenever you want',
    },
    {
        icon: IconGift,
        title: 'Souvenirs',
        description: 'Browse through ma dick nigga', //delete please next time
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function Navbar() {
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
    const [linksOpened, {toggle: toggleLinks}] = useDisclosure(false);
    const {classes, theme} = useStyles();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap={true} align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.fn.primaryColor()}/>
                </ThemeIcon>
                <div>
                    <Text size="sm" weight={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box pb={120}>
            <Header height={60} px="md">
                <Group position="apart" sx={{height: '100%'}}>
                    <Anchor href="/" display={'inline-block'} >
                        <Image height={45} src={logo} alt={"logoBrand"} />
                    </Anchor>

                    {/*<a href="#" style={{wordWrap: 'break-word', width: 'auto'}}>*/}
                    {/*    */}
                    {/*</a>*/}
                    {/*<MantineLogo size={30} />*/}

                    {/*add modal when class is hiddenMobile?*/}
                    {/*or maybe wrap it around another group with assigned width? (real width is line 87 in scss file)*/}
                    <Search />
                    <Group sx={{height: '100%'}} spacing={0} className={classes.hiddenMobile}>
                        <a href="#" className={classes.link}>
                            Books
                        </a>
                        <a href="#" className={classes.link}>
                            Digital
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Products
                                        </Box>
                                        <IconChevronDown size={16} color={theme.fn.primaryColor()}/>
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown sx={{overflow: 'hidden'}}>
                                <Group position="apart" px="md">
                                    <Text weight={500}>Features</Text>
                                    <Anchor href="#" size="xs">
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider
                                    my="sm"
                                    mx="-md"
                                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                                />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                <div className={classes.dropdownFooter}>
                                    <Group position="apart">
                                        <div>
                                            <Text weight={500} size="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <Button>Cart</Button>
                        <Button component="a" href="/login" variant="default">Log in</Button>
                        <Button component="a" href="/signup">Sign up</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}/>
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea sx={{height: 'calc(100vh - 60px)'}} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.fn.primaryColor()}/>
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened} > {links} </Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>

                    <Group grow pb="md">
                        <Button color={theme.colors.dark[7]} mx={16} >Cart</Button>
                    </Group>
                    <Group position="center" grow pb="md" px="md">
                        {/*usrCnt.isLoggedIn ? Cart + LogOut*/}
                        <Button component="a" href="/login" variant="default">Log in</Button>
                        <Button component="a" href="/signup">Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default Navbar;