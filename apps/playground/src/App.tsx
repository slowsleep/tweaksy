import React, { useState } from "react";
import { colors, ColorType } from "tweaksy-ui";
import { Flex, Grid, Container, Section } from "tweaksy-ui/layout";
import { Button, Input, Label } from "tweaksy-ui/form";
import "./App.css";
import { ColorBox } from "./components/ColorBox/ColorBox";

function App() {
    const [text, setText] = useState("");

    return (
        <Container size="sm">
            <div className="card">
                <h2>Colors</h2>
                <Flex direction="col">
                    <Grid columns="12">
                        {[90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 5].map((luminocity) => (
                            <p key={luminocity}>{luminocity}%</p>
                        ))}
                        {colors.map((color: string) => (
                            <React.Fragment key={color}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((shade) => (
                                    <ColorBox
                                        key={shade}
                                        color={color as ColorType}
                                        shade={shade}
                                        title={`${color}-${shade}`}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </Grid>
                </Flex>

                <Section>
                    <h3>some section</h3>
                </Section>

                <h2>Buttons</h2>
                <Flex direction="col" gap="2">
                    <h3>Default</h3>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-default">Button default</Label>
                        <Button id="btn-default">default</Button>
                    </Flex>
                    <h3>Sizes</h3>

                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-sm">Button sm</Label>
                        <Button id="btn-sm" size="sm">
                            sm
                        </Button>
                    </Flex>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-md">Button md</Label>
                        <Button id="btn-md">md</Button>
                    </Flex>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-lg">Button lg</Label>
                        <Button id="btn-lg" size="lg">
                            lg
                        </Button>
                    </Flex>

                    <h3>Variants</h3>

                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-solid">Button solid</Label>
                        <Button
                            id="btn-solid"
                            variant="solid"
                            style={{ backgroundColor: "hsl(150, 100%, 30%)" }}
                        >
                            solid green hsl(150 100 30)
                        </Button>
                    </Flex>

                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-outline">Button outline</Label>
                        <Button
                            id="btn-outline"
                            variant="outline"
                            customColor="red"
                        >
                            outline custom color red
                        </Button>
                    </Flex>

                    <h3>Rounded</h3>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-rounded-none">
                            Button rounded none{" "}
                        </Label>
                        <Button id="btn-rounded-none" radius="none">
                            rounded
                        </Button>
                    </Flex>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-rounded-sm">Button rounded sm</Label>
                        <Button id="btn-rounded-sm" radius="sm">
                            rounded
                        </Button>
                    </Flex>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-rounded-md">Button rounded md</Label>
                        <Button id="btn-rounded-md" radius="md">
                            rounded
                        </Button>
                    </Flex>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-rounded-lg">Button rounded lg</Label>
                        <Button id="btn-rounded-lg" radius="lg">
                            rounded
                        </Button>
                    </Flex>
                    <Flex direction="row" justify="center" gap="3">
                        <Label htmlFor="btn-rounded-full">Button rounded full</Label>
                        <Button id="btn-rounded-full" radius="full">
                            rounded
                        </Button>
                    </Flex>

                    <h3>test btns</h3>
                    <Button
                        shadow="lg"
                        variant="solid"
                        color="pink"
                        luminocity={90}
                        size="sm"
                        radius="full"
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5v14m8-7h-2m0 0h-2m2 0v2m0-2v-2M3 11h6m-6 4h6m11 4H4c-.55228 0-1-.4477-1-1V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"
                            />
                        </svg>
                    </Button>
                    <button>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5v14m8-7h-2m0 0h-2m2 0v2m0-2v-2M3 11h6m-6 4h6m11 4H4c-.55228 0-1-.4477-1-1V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"
                            />
                        </svg>
                    </button>
                </Flex>

            </div>

            <div className="card">
                <h2>Inputs</h2>
                <Label htmlFor="text">Input</Label>
                <Input
                    id="text"
                    value={text}
                    type="text"
                    placeholder="Type something..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setText(e.target.value);
                        console.log(e.target.value);
                    }}
                />
            </div>
        </Container>
    );
}

export default App;
