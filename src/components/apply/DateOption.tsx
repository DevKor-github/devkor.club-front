import { css } from "@styled-stytem/css";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";

import Checked from "@/assets/Checked.svg";
import Unchecked from "@/assets/Unchecked.svg";

interface DateOptionProps {
	index: number;
	dateOption: string;
	selected: boolean;
	handleSelecteTime: (index: number) => void;
}
const DateOption = memo(
	({ index, dateOption, selected, handleSelecteTime }: DateOptionProps) => {
		const [hover] = useState(false);
		//   const [selectedTime, setSelectedTime] = useAtom(selectedTimes)
		//   console.log(selectedTime)
		return (
			<button
				className={css({
					display: "flex",
					w: "full",
					pos: "relative",
					maxW: 820,
					h: 53,
					px: 30,
					py: "13px",
					justifyContent: "flex-start",
					alignItems: "center",
					alignSelf: "stretch",
					rounded: 30,
					border: "1.5px solid {colors.label.98}",
					bgColor: "label.BG",
					_hover: { bgColor: "label.98" },
					transition: "background-color 0.3s ease-in-out",
					cursor: "pointer",
					gap: 2.5,
				})}
				//   onMouseEnter={() => setHover(h => !h)}
				//   onMouseLeave={() => setHover(h => !h)}
				onClick={(e) => {
					e.preventDefault();
					handleSelecteTime(index);
					// setSelectedTime(t => t.map((time, i) => (i === index ? { selected: !time.selected } : time)))
				}}
			>
				<AnimatePresence>
					{/* {hover && (
          <motion.img
            key={`uncheckedHover-${index}`}
            src={UncheckedHover}
            alt="uncheckedHover"
            className={css({ w: '26px', pos: 'absolute' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )} */}
					{!hover && (
						<motion.img
							key={`unchecked-${index}`}
							src={Unchecked}
							alt="unchecked"
							className={css({ w: "26px", pos: "absolute" })}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>
					)}
					{/* {hover && selectedTime[index].selected && (
          <motion.img
            key={`checkedHover-${index}`}
            src={CheckedHover}
            alt="uncheckedHover"
            className={css({ w: '26px', pos: 'absolute' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )} */}
					{!hover && selected && (
						<motion.img
							key={`checked-${index}`}
							src={Checked}
							alt="unchecked"
							className={css({ w: "26px", pos: "absolute" })}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>
					)}
				</AnimatePresence>
				<p
					className={css({
						fontSize: 18,
						fontWeight: 500,
						color: "label.80",
						ml: 10,
					})}
				>
					{dateOption}
				</p>
			</button>
		);
	},
);

export default DateOption;
