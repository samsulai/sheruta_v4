import React from 'react'
import { HiOutlineUser } from 'react-icons/hi2'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	leftAddon?: any
	rightAddon?: any
}

export default function _FormInputGroup(props: Props) {
	const { label, leftAddon, rightAddon, ...rest } = props
	return (
		<div>
			{label && (
				<label htmlFor={rest.id} className="text-sm text-dark_lighter">
					{label}
				</label>
			)}
			<div className="bg-white rounded-md border border-dark_lighter flex gap-3 items-center text-dark_lighter">
				{leftAddon && <div className="text-gray-400 pl-2">{leftAddon}</div>}
				<input
					{...rest}
					className="rounded-md outline-none bg-none text-sm w-full h-11 border-0 px-2"
				/>
				{rightAddon && <div className="text-gray-400 mr-2">{rightAddon}</div>}
			</div>
		</div>
	)
}