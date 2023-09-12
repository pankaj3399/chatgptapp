import {
    Card,
    CardBody,
    CardFooter,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo/logo.png'

export default function Login() {
    return (
        <div className="w-screen absolute top-1/4">
            <div className="w-1/4 mx-auto flex items-center gap-3">
                <img className="w-16 h-16" src={logo} alt="" />
                <h2 className="text-xl font-extrabold">Powerful AI For Business</h2>
            </div>
            <Card className="w-1/3 mx-auto">
                <h1 className="p-10 text-[18px] font-semibold text-black">Login</h1>
                <CardBody className="flex flex-col gap-4 w-5/6 ms-auto pt-0">

                    <table>
                        <tr className="relative">
                            <td>
                                <p className="w-[50px] absolute bottom-2 left-[30px]">Email</p>
                            </td>
                            <td>
                                <Input
                                    type="email"
                                    color="lightBlue"
                                    size="regular"
                                    outline={false}
                                    label="Email"
                                />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <p className="w-[75px]  me-[-15px]">Password</p>
                            </td>
                            <td>
                                <Input
                                    type="password"
                                    color="lightBlue"
                                    size="regular"
                                    outline={false}
                                    label="Password"
                                />
                            </td>
                        </tr>
                    </table>

                </CardBody>
                <CardFooter className="pt-0 ms-auto">
                    <Link to={'/library'}>
                        <Button className="" variant="black" fullWidth>
                            Login
                        </Button>
                    </Link>

                </CardFooter>
            </Card>
        </div>
    );
}