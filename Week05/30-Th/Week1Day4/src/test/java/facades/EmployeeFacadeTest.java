/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.EmployeeDTO;
import entities.Employee;
import static facades.EmployeeFacade.getEmployeeFacade;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Ignore;

/**
 *
 * @author rando
 */
public class EmployeeFacadeTest {

    public EmployeeFacadeTest() {
    }

    @BeforeClass
    public static void runOnceBeforeClass() {
    }

    @AfterClass
    public static void runOnceAfterClass() {
        
    }

    @Before
    public void runBeforeTestMethod() {
    }

    @After
    public void runAfterTestMethod() {
    }

    /**
     * Test of createEmployee method, of class EmployeeFacade.
     */
    @Ignore
    @Test
    public void testCreateEmployee() {
        EmployeeFacade ef = getEmployeeFacade(Persistence.createEntityManagerFactory("pu"));
        System.out.println("createEmployee");
        String name = "test-Name";
        String address = "test-Address";
        Long salary = 852456L;
        assertNotNull(ef.createEmployee(name, address, salary));
    }

}
