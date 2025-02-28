import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { AppProvider } from "./Components/Providers/AppProvider";

// Here now this render() will be used in test case that requires AppProvider context
const customRender= (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>)=> render(ui, {wrapper:AppProvider, ...options})

export * from '@testing-library/react'
export {customRender as render}

// A boilerplate code for custom render() which we can use for test case that requires any wrapper provider 