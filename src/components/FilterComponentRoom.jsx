
import React, { useEffect, useState } from 'react'

export default function FilterComponentRoom({ onFilterChange, initialFilters = {} }) {
	const [floor, setFloor] = useState(initialFilters.floor ?? '')
	const [size, setSize] = useState(initialFilters.size ?? '')
	const [beamer, setBeamer] = useState(initialFilters.beamer ?? false)
	const [availableOnly, setAvailableOnly] = useState(initialFilters.availableOnly ?? false)

	// Notify parent when filters change
	useEffect(() => {
		if (typeof onFilterChange === 'function') {
			onFilterChange({ floor, size, beamer, availableOnly })
		}
	}, [floor, size, beamer, availableOnly, onFilterChange])

	const clearFilters = () => {
		setFloor('')
		setSize('')
		setBeamer(false)
		setAvailableOnly(false)
	}

	return (
		<div style={{ border: '1px solid #e0e0e0', borderRadius: 8, padding: 14, width: 320, background: '#fff' }}>
			<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
				<select
					value={floor}
					onChange={(e) => setFloor(e.target.value)}
					style={{ flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid #ccc' }}
				>
					<option value="">Floor</option>
					{Array.from({ length: 13 }, (_, i) => i + 1).map((n) => (
						<option key={n} value={String(n)}>{`Floor ${n}`}</option>
					))}
				</select>

				<select
					value={size}
					onChange={(e) => setSize(e.target.value)}
					style={{ flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid #ccc' }}
				>
					<option value="">Room size</option>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="big">Big</option>
				</select>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 10 }}>
				<label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
					<input type="checkbox" checked={beamer} onChange={(e) => setBeamer(e.target.checked)} />
					<span style={{ color: '#000' }}>Beamer</span>
				</label>

				<label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
					<input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} />
					<span style={{ color: '#000' }}>Available only</span>
				</label>
			</div>

			<div style={{ textAlign: 'right' }}>
				<button
					onClick={clearFilters}
					style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer', color: '#000' }}
				>
					Clear all filters
				</button>
			</div>
		</div>
	)
}

