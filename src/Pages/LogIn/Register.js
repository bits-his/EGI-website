import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import { stateLga } from "../../Component/state_lga";
import "./Login.css";
import { _post } from "../../Helper";

export default function Register() {
  const [form, setForm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleSubmit = (e) => {
    if (loading) return;
    e.preventDefault();
    _post(
      "CREATE",
      { ...form,  },
      () => {
        setLoading(false);
        alert("submittion succes");
      },
      () => {
        setLoading(false);
        alert("submittion failed");
      }
    );
    console.log(form);

    // const newErrors = validateForm(form);
    // setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   setLoading(true);
    //   console.log(form);
    //    _post(
    //      "superagent/create",
    //      form,
    //      (res) => {
    //        setLoading(true);
    //        toast.success("super agent created successfully");
    //        setSubmittedData([...submittedData, res]);
    //        navigate("/superagenttable");
    //      },
    //      () => {
    //        setLoading(false);
    //        toast.error("An error occurred while creating super agent");
    //      }
    //    );
    // } else {
    //   Object.values(newErrors).forEach((error) => {});
    // }
  };
  // const validateForm = (formData) => {
  //   let newErrors = {};

  //   if (!formData.firstname.trim()) {
  //     newErrors.firstname = "FirstName must be filled";
  //   }
  //   if (!formData.lastname.trim()) {
  //     newErrors.lastname = "LastName must be filled";
  //   }
  //   if (!formData.phone.trim()) {
  //     newErrors.phone = "Phone Number must be filled";
  //   }
  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email must be filled";
  //   }
  //   if (!formData.state.trim()) {
  //     newErrors.state = "State must be filled";
  //   }
  //   if (!formData.lga.trim()) {
  //     newErrors.lga = "L.G.A.  must be filled";
  //   }
  //   if (!formData.address.trim()) {
  //     newErrors.address = "Address must be filled";
  //   }
  //   if (!formData.schOfWealthCreation.trim()) {
  //     newErrors.schOfWealthCreation = "School Of Wealth Creation must be filled";
  //   }
  //   if (!formData.programType.trim()) {
  //     newErrors.programType = "Program Type must be filled";
  //   }
  //   if (!formData.dop.trim()) {
  //     newErrors.dop = "Date Of Birth must be filled";
  //   }
  //   if (!formData.gender.trim()) {
  //     newErrors.gender = "Gender must be filled";
  //   }
  //   if (!formData.paidprogram.trim()) {
  //     newErrors.paidprogram = "Program Paid must be filled";
  //   }
  //   if (!formData.schOfFarmOperationalManagement.trim()) {
  //     newErrors.schOfFarmOperationalManagement = "School Operationa Management Paid must be filled";
  //   }

  //   return newErrors;
  // };

  return (
    <>
      {/* const [showSizeInput, setShowSizeInput] = useState(false); const
      [showSizeInputchange, setShowSizeInputchange] = useState(false);
      <div className="grid gap-3">
        <Label htmlFor="product_subcategory">Subcategory (optional)</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange("product_subcategory", value)
          }
        >
          <SelectTrigger
            id="product_subcategory"
            aria-label="Select subcategory"
          >
            <SelectValue placeholder="Select subcategory" />
          </SelectTrigger>
          <SelectContent>
            {subCategories.map((subCategory, idx) => (
              <SelectItem key={idx} value={subCategory.type_name}>
                {subCategory.type_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {showSizeInput && (
        <div className="grid gap-3">
          <Label htmlFor="product_size">Measurement</Label>
          {!showSizeInputchange ? (
            <Select
              onValueChange={(value) =>
                handleSelectChange("product_size", value)
              }
            >
              <SelectTrigger id="product_size" aria-label="Select size">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Per 1 Yard">Per 1 Yard</SelectItem>
                <SelectItem value="Per 5 Yard">Per 5 Yard</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Input
              id="product_size"
              type="text"
              value={
                editMode
                  ? currentProduct?.product_size
                  : newProduct.product_size
              }
              placeholder="Enter your measurement"
              onChange={handleInputChange} // Handle input for custom size
            />
          )}
        </div>
      )} */}
      <div className="registration">
        <div className="reg-card shadow-sm">
          <CardHeader>
            <h4>Application Form</h4>
            <p>
              Fill the form below to Register in Enterprise Grooming Institute
            </p>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">First Name</Label>
                      <Input
                        onChange={handleChange}
                        id="firstname"
                        name="firstname"
                        value={form.firstname}
                        type="text"
                        // invalid={!!errors.firstname}
                      />
                      {/* <FormFeedback>
                        <span style={{ color: "red" }}>{errors.firstname}</span>
                      </FormFeedback> */}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">Last Name</Label>
                      <Input
                        onChange={handleChange}
                        id="lastname"
                        name="lastname"
                        value={form.lastname}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        value={form.phone}
                        type="tel"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        onChange={handleChange}
                        id="email"
                        name="email"
                        value={form.email}
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="lga">Application Type</Label>
                      <Input
                        onChange={handleChange}
                        id="application_type"
                        name="application_type"
                        type="select"
                        className="app_input"
                        value={form.application_type}
                      >
                        <option value={""}>---select-----</option>
                        <option value={"schOfWealthCreation"}>
                          School of wealth creation
                        </option>
                        <option value={"schOfFarmOperationalManagement"}>
                          School of Farm operational management
                        </option>
                      </Input>
                    </FormGroup>
                  </Col>
                  {/* {JSON.stringify(form.application_type)} */}
                  {form.application_type === "schOfWealthCreation" ? (
                    <Col md={12}>
                      <FormGroup>
                        <Label for="lga">Department</Label>
                        <Input
                          onChange={handleChange}
                          id="department"
                          name="department"
                          type="select"
                          className="app_input"
                          value={form.department}
                        >
                          <option>
                            Department of waste to wealth management
                          </option>
                          <option>Department of Soft skill management</option>
                          <option>Department of Enterprise Development</option>
                          <option>Department of Executive programmes</option>
                          <option>Department of Media and publication</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  ) : null}
                  {form.application_type ===
                  "schOfFarmOperationalManagement" ? (
                    <Col md={12}>
                      <FormGroup>
                        <Label for="lga">Department</Label>
                        <Input
                          onChange={handleChange}
                          id="department"
                          name="department"
                          type="select"
                          className="app_input"
                          value={form.department}
                        >
                          <option>
                            Department of livestock farm operation
                          </option>
                          <option>
                            Department of Arable and Vegetable Farm Operation
                          </option>
                        </Input>
                      </FormGroup>
                    </Col>
                  ) : null}
                  {/* <Col md={12}>
                    <FormGroup>
                      <Label for="lga">Department</Label>
                      <Input
                        onChange={handleChange}
                        id="department"
                        name="department"
                        type="select"
                        className="app_input"
                      >
                        <option value={"dptOfWasteToWealthManaagement"}>
                          Department of waste to wealth management
                        </option>
                        <option value={"dptOfSoftSkillManagement"}>
                          Department of Soft skill management
                        </option>
                        <option value={"dptOfEnterpriseDevelopment"}>
                          Department of Enterprise Development
                        </option>
                        <option value={"dptOfExecutiveProgrammes"}>
                          Department of Executive programmes
                        </option>
                        <option value={"dptOfMediaAndPublication"}>
                          Department of Media and publication
                        </option>
                      </Input>
                    </FormGroup>
                  </Col> */}

                  <Col md={12}>
                    <FormGroup>
                      <Label for="address">Contact address</Label>
                      <Input
                        onChange={handleChange}
                        id="address"
                        name="address"
                        vlaue={form.address}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <FormGroup>
                    <Label for="dop">Date Of Birth</Label>
                    <Input
                      id="dop"
                      name="dob"
                      onChange={handleChange}
                      type="date"
                      value={form.dob}
                    />
                  </FormGroup>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="state">State</Label>
                      <Input
                        onChange={handleChange}
                        id="state"
                        name="state"
                        type="select"
                        className="app_input"
                        value={form.state}
                      >
                        <option value={""}>Select State</option>
                        {stateLga.map((item) => (
                          <option>{item.state}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lga">LGA</Label>
                      <Input
                        onChange={handleChange}
                        id="lga"
                        name="lga"
                        type="select"
                        className="app_input"
                        value={form.lga}
                      >
                        <option value={""}>--Select LGA--</option>
                        {stateLga
                          .filter((item) => item.state === form.state)[0]
                          ?.lgas?.map((lga, idx) => (
                            <option key={idx}>{lga}</option>
                          ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="lga">Programme type</Label>
                      <Input
                        onChange={handleChange}
                        id="program_type"
                        name="program_type"
                        type="select"
                        className="app_input"
                      >
                        <option>Physical Class</option>
                        <option>Online Class</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="gender">Gender</Label>
                      <Input
                        onChange={handleChange}
                        id="gender"
                        name="gender"
                        type="select"
                        className="app_input"
                        value={form.gender}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="nin">
                        Successfully paid for the program?
                      </Label>
                      <Input
                        onChange={handleChange}
                        id="payment_status"
                        name="payment_status"
                        type="select"
                        className="app_input"
                        value={form.payment_status}
                      >
                        <option>Paid</option>
                        <option>Unpaid</option>
                      </Input>
                      <FormText>
                        Ecobank Plc Enterprise Grooming Institute Account Number
                        : 2610034591
                      </FormText>
                    </FormGroup>
                  </Col>
                </Row>

                <div className="d-flex justify-content-center">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      width: 150,
                      padding: 10,
                      color: "",
                      cursor: "pointer",
                      borderRadius: 7,
                    }}
                  >
                    {loading ? "Submitting" : "Submit"}
                  </button>
                </div>
              </Form>
            </CardBody>
          </CardHeader>
        </div>
      </div>
    </>
  );
}
