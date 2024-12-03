import React from "react"

const Sxs = ({ data }) => {
  // Fetch maverickDetails and rzrDetails from the prop passed down
  const { maverickDetails, rzrDetails } = data.mdx.frontmatter

  return (
    <div>
      {/* Maverick X3 Turbo RR Details */}
      <h2>Maverick X3 Turbo RR Details</h2>
      <p>{maverickDetails.description}</p>
      <ul>
        <li>Suspension: {maverickDetails.specs.suspension}</li>
        <li>Engine: {maverickDetails.specs.engine}</li>
        <li>Weight: {maverickDetails.specs.weight}</li>
      </ul>

      {/* Polaris RZR Pro R Details */}
      <h2>Polaris RZR Pro R Details</h2>
      <p>{rzrDetails.description}</p>
      <ul>
        <li>Suspension: {rzrDetails.specs.suspension}</li>
        <li>Engine: {rzrDetails.specs.engine}</li>
        <li>Weight: {rzrDetails.specs.weight}</li>
      </ul>
    </div>
  )
}

export default Sxs


